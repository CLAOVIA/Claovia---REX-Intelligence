import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Claovia <noreply@claovia.com>";

export async function sendRexInvitation({
  to,
  collaboratorName,
  managerName,
  organizationName,
  token,
  expiresAt,
}: {
  to: string;
  collaboratorName: string;
  managerName: string;
  organizationName: string;
  token: string;
  expiresAt: Date;
}) {
  const rexUrl = `${process.env.NEXT_PUBLIC_APP_URL}/rex/${token}`;
  const expiryDate = expiresAt.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: `${organizationName} - Ton avis compte`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #374151;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #20372F 0%, #3A8577 100%);
                color: white;
                padding: 40px 30px;
                border-radius: 16px;
                text-align: center;
                margin-bottom: 30px;
              }
              .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                margin-bottom: 20px;
              }
              .dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: 2px solid white;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 16px;
                border: 1px solid #E5E7EB;
              }
              .cta-button {
                display: inline-block;
                background: #20372F;
                color: white;
                padding: 16px 32px;
                border-radius: 12px;
                text-decoration: none;
                font-weight: 600;
                margin: 20px 0;
              }
              .info-box {
                background: #EBF5F3;
                border-left: 4px solid #3A8577;
                padding: 16px;
                margin: 20px 0;
                border-radius: 8px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 30px;
                border-top: 1px solid #E5E7EB;
                color: #9CA3AF;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <h1 style="margin: 0; font-size: 28px;">Claovia</h1>
            </div>

            <div class="content">
              <h2 style="color: #20372F; margin-top: 0;">Bonjour ${collaboratorName},</h2>

              <p>${managerName} souhaite recueillir ton retour d'expérience pour mieux comprendre tes besoins et améliorer ton quotidien professionnel.</p>

              <p><strong>Pourquoi participer ?</strong></p>
              <ul>
                <li>Ton avis compte et influence les décisions</li>
                <li>C'est 100% confidentiel</li>
                <li>Ça ne prend que 5-10 minutes</li>
                <li>Clao, ton assistant IA, rend l'échange simple et fluide</li>
              </ul>

              <div class="info-box">
                <strong>Comment ça marche ?</strong><br>
                Tu vas échanger avec Clao dans une conversation guidée. Tes réponses restent confidentielles. Seule une synthèse anonymisée sera partagée avec ${managerName}.
              </div>

              <div style="text-align: center;">
                <a href="${rexUrl}" class="cta-button">
                  Commencer mon REX
                </a>
              </div>

              <p style="font-size: 14px; color: #6B7280;">
                <strong>Lien valide jusqu'au ${expiryDate}</strong><br>
                Si le bouton ne fonctionne pas, copie ce lien : <a href="${rexUrl}">${rexUrl}</a>
              </p>
            </div>

            <div class="footer">
              <p>Envoyé par ${organizationName} via Claovia</p>
              <p>Cette conversation est chiffrée et confidentielle</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

export async function sendManagerNotification({
  to,
  managerName,
  collaboratorName,
  rexId,
  priority,
}: {
  to: string;
  managerName: string;
  collaboratorName: string;
  rexId: string;
  priority: "high" | "medium" | "low";
}) {
  const dashboardUrl = `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/rex/${rexId}`;

  const priorityLabels = {
    high: "PRIORITÉ HAUTE",
    medium: "Priorité moyenne",
    low: "Priorité faible",
  };

  const priorityColors = {
    high: "#E04F5F",
    medium: "#F59E0B",
    low: "#3A8577",
  };

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: `Nouveau REX de ${collaboratorName}${
        priority === "high" ? " - PRIORITÉ HAUTE" : ""
      }`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #374151;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #20372F 0%, #3A8577 100%);
                color: white;
                padding: 40px 30px;
                border-radius: 16px;
                text-align: center;
                margin-bottom: 30px;
              }
              .priority-badge {
                display: inline-block;
                background: ${priorityColors[priority]};
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-weight: 700;
                font-size: 12px;
                margin-bottom: 16px;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 16px;
                border: 1px solid #E5E7EB;
              }
              .cta-button {
                display: inline-block;
                background: #20372F;
                color: white;
                padding: 16px 32px;
                border-radius: 12px;
                text-decoration: none;
                font-weight: 600;
                margin: 20px 0;
              }
              .alert-box {
                background: ${priority === "high" ? "#FEF2F2" : "#F9F9F7"};
                border-left: 4px solid ${priorityColors[priority]};
                padding: 16px;
                margin: 20px 0;
                border-radius: 8px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 30px;
                border-top: 1px solid #E5E7EB;
                color: #9CA3AF;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <span class="priority-badge">${priorityLabels[priority]}</span>
              <h1 style="margin: 0; font-size: 28px;">Nouveau REX Disponible</h1>
            </div>

            <div class="content">
              <h2 style="color: #20372F; margin-top: 0;">Bonjour ${managerName},</h2>

              <p><strong>${collaboratorName}</strong> a terminé son retour d'expérience.</p>

              ${
                priority === "high"
                  ? `
              <div class="alert-box">
                <strong>Action recommandée sous 48h</strong><br>
                L'analyse a détecté des signaux nécessitant votre attention rapide.
              </div>
              `
                  : ""
              }

              <p><strong>Ce qui vous attend :</strong></p>
              <ul>
                <li>Analyse IA complète du ressenti</li>
                <li>Recommandations d'actions prioritaires</li>
                <li>Kit manager prêt à l'emploi (email, guide d'entretien)</li>
                <li>Réponses brutes du collaborateur</li>
              </ul>

              <div style="text-align: center;">
                <a href="${dashboardUrl}" class="cta-button">
                  Voir le plan d'accompagnement
                </a>
              </div>

              <p style="font-size: 14px; color: #6B7280; margin-top: 30px;">
                <strong>Rappel :</strong> Ces informations sont confidentielles et destinées à vous aider à mieux accompagner votre équipe.
              </p>
            </div>

            <div class="footer">
              <p>Claovia - L'Intelligence Managériale</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}
