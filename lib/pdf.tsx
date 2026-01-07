import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register fonts (optional - uses built-in if not specified)
// Font.register({
//   family: 'Inter',
//   src: '/fonts/Inter-Regular.ttf'
// });

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.6,
  },
  header: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottom: "2px solid #20372F",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#20372F",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#20372F",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#20372F",
    marginBottom: 12,
    paddingBottom: 4,
    borderBottom: "1px solid #E5E7EB",
  },
  text: {
    fontSize: 10,
    color: "#374151",
    marginBottom: 8,
  },
  keyPoint: {
    fontSize: 10,
    color: "#374151",
    marginBottom: 6,
    paddingLeft: 16,
  },
  priorityBadge: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  priorityHigh: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
    padding: "4 8",
    borderRadius: 4,
    fontSize: 8,
    fontWeight: "bold",
  },
  priorityMedium: {
    backgroundColor: "#FEF3C7",
    color: "#92400E",
    padding: "4 8",
    borderRadius: 4,
    fontSize: 8,
    fontWeight: "bold",
  },
  recommendation: {
    backgroundColor: "#F9FAFB",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderLeft: "3px solid #3A8577",
  },
  action: {
    fontSize: 9,
    color: "#4B5563",
    marginBottom: 4,
    paddingLeft: 12,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 8,
    color: "#9CA3AF",
    borderTop: "1px solid #E5E7EB",
    paddingTop: 10,
  },
  confidential: {
    backgroundColor: "#FEF2F2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderLeft: "3px solid #E04F5F",
  },
});

interface RexPdfData {
  collaborator: {
    name: string;
    email: string;
    team: string;
    role: string;
  };
  date: string;
  analysis: {
    summary: string;
    sentiment: string;
    dataQuality: string;
    keyPoints: string[];
    riskLevel: string;
    riskIndicators?: string[];
  };
  recommendations: Array<{
    priority: string;
    title: string;
    description: string;
    actions: string[];
  }>;
  rawResponses?: Array<{
    question: string;
    answer: string;
  }>;
}

export const RexPdfDocument = ({
  collaborator,
  date,
  analysis,
  recommendations,
  rawResponses,
}: RexPdfData) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Claovia</Text>
        <Text style={styles.title}>REX Manager - Synthèse Confidentielle</Text>
        <Text style={styles.subtitle}>
          {collaborator.name} • {collaborator.role} • {collaborator.team}
        </Text>
        <Text style={styles.subtitle}>Date: {date}</Text>
      </View>

      {/* Confidentiality Notice */}
      <View style={styles.confidential}>
        <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 4 }}>
          DOCUMENT CONFIDENTIEL
        </Text>
        <Text style={{ fontSize: 8, color: "#6B7280" }}>
          Ce document contient des informations confidentielles destinées
          uniquement au manager. Ne pas diffuser.
        </Text>
      </View>

      {/* Analysis Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Analyse IA</Text>
        <Text style={styles.text}>{analysis.summary}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            marginTop: 8,
          }}
        >
          <Text style={{ fontSize: 9, color: "#6B7280" }}>
            Sentiment: {analysis.sentiment}
          </Text>
          <Text style={{ fontSize: 9, color: "#6B7280" }}>
            Qualité: {analysis.dataQuality}
          </Text>
          <Text style={{ fontSize: 9, color: "#6B7280" }}>
            Risque: {analysis.riskLevel}
          </Text>
        </View>
      </View>

      {/* Key Points */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Points Clés</Text>
        {analysis.keyPoints.map((point, index) => (
          <Text key={index} style={styles.keyPoint}>
            • {point}
          </Text>
        ))}
      </View>

      {/* Risk Indicators */}
      {analysis.riskIndicators && analysis.riskIndicators.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Indicateurs de Risque</Text>
          {analysis.riskIndicators.map((indicator, index) => (
            <Text key={index} style={styles.keyPoint}>
              • {indicator}
            </Text>
          ))}
        </View>
      )}

      {/* Recommendations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommandations</Text>
        {recommendations.map((rec, index) => (
          <View key={index} style={styles.recommendation}>
            <View style={styles.priorityBadge}>
              <Text
                style={
                  rec.priority === "high"
                    ? styles.priorityHigh
                    : styles.priorityMedium
                }
              >
                {rec.priority === "high" ? "PRIORITÉ HAUTE" : "PRIORITÉ MOYENNE"}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "bold",
                color: "#20372F",
                marginBottom: 6,
              }}
            >
              {rec.title}
            </Text>
            <Text style={{ fontSize: 9, color: "#4B5563", marginBottom: 8 }}>
              {rec.description}
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontWeight: "bold",
                color: "#374151",
                marginBottom: 4,
              }}
            >
              Actions concrètes :
            </Text>
            {rec.actions.map((action, idx) => (
              <Text key={idx} style={styles.action}>
                {idx + 1}. {action}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text>
          Document généré par Claovia - L'Intelligence Managériale
        </Text>
        <Text>Document confidentiel - Ne pas diffuser</Text>
      </View>
    </Page>

    {/* Raw Responses - Second Page */}
    {rawResponses && rawResponses.length > 0 && (
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Réponses brutes du collaborateur</Text>
          <Text style={styles.subtitle}>
            Retranscription complète de la conversation
          </Text>
        </View>

        {rawResponses.map((response, index) => (
          <View key={index} style={styles.section}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "bold",
                color: "#20372F",
                marginBottom: 6,
              }}
            >
              {response.question}
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: "#4B5563",
                fontStyle: "italic",
                paddingLeft: 12,
                borderLeft: "2px solid #EBF5F3",
              }}
            >
              "{response.answer}"
            </Text>
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Text>
            Document généré par Claovia - L'Intelligence Managériale
          </Text>
          <Text>Document confidentiel - Ne pas diffuser</Text>
        </View>
      </Page>
    )}
  </Document>
);

// Export function for API route
export async function generateRexPdf(data: RexPdfData) {
  const { renderToBuffer } = await import("@react-pdf/renderer");
  const buffer = await renderToBuffer(<RexPdfDocument {...data} />);
  return buffer;
}
