import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font
} from '@react-pdf/renderer';
import { DownloadPdfProps } from '.';

Font.register({
  family: 'Roboto',
  src: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
  fontStyle: 'normal',
  fontWeight: 300
});

type buildCardProps = {
  index: number;
  array: number[];
};

// Create Document Component
export function PdfCards({ card }: DownloadPdfProps) {
  let styles: any = {};

  if (typeof window !== 'undefined') {
    // Create styles
    styles = StyleSheet.create({
      page: {
        fontFamily: 'Roboto',
        backgroundColor: '#FFF',
        color: '#FFF',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
      },
      card: {
        width: '48%',
        height: '135px',
        padding: 5,
        margin: 6,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#16db65',
        flexWrap: 'wrap',
        alignItems: 'stretch'
      },
      cardLeft: {
        width: '30%',
        height: '100%',
        padding: 3,
        backgroundColor: '#0d2818',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center'
      },
      cardCenter: {
        width: '51%',
        height: '100%',
        padding: 3,
        backgroundColor: '#04471c',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center'
      },
      price: {
        fontSize: '13pt',
        fontWeight: 'bold',
        color: 'yellow',
        padding: 3,
        backgroundColor: '#0d2818'
      },
      cardRight: {
        width: '16%',
        height: '100%',
        padding: 1,
        backgroundColor: '#04471c',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      random_numbers: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
        fontSize: '15pt',
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      flexbox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
      },
      smallTitle: {
        fontWeight: 'bold',
        fontSize: '10pt'
      },
      bigTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: '20pt',
        flex: 1
      },
      description: {
        width: '100%',
        fontSize: '8pt',
        flex: 1
      },
      explanation: {
        flex: 1,
        fontSize: '6pt'
      },
      date: {
        backgroundColor: '#FFF',
        color: '#131314',
        padding: 1,
        fontSize: '7pt'
      },
      identifierNumber: {
        backgroundColor: '#FFF',
        color: '#131314',
        padding: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '13pt',
        flex: 1,
        marginTop: 0.5
      },
      fieldToFill: {
        width: '100%',
        backgroundColor: '#FFF',
        color: '#131314',
        padding: 1,
        position: 'relative',
        fontSize: '8pt',
        flex: 1,
        marginTop: 0.5
      },
      placeholder: {
        position: 'absolute',
        left: 5,
        top: 0,
        fontSize: '7pt'
      }
    });
  }

  return (
    <Document title="Cartelas">
      {/*render a single page*/}
      <Page size="A4" style={styles?.page} wrap={false} orientation="landscape">
        {card.values_sorted.map((values, index) => {
          return (
            <View key={index} style={styles?.card} wrap={false}>
              {/* Left */}
              <View style={styles?.cardLeft}>
                {/* Date */}
                <View style={styles?.flexbox}>
                  <Text style={styles?.smallTitle}>Pix Sorte</Text>
                  <Text style={styles?.date}>
                    {new Date(card.date_sort).toLocaleDateString()}
                  </Text>
                </View>
                {/* Sorted Numbers
                <View></View> */}
                {/* Identifier Number */}
                <View style={styles?.identifierNumber}>
                  <Text>Cartela {index + 1}</Text>
                </View>
                {/* Customer Name */}
                <View style={styles?.fieldToFill}>
                  <Text style={styles.placeholder}>Nome Do cliente</Text>
                </View>
                {/* Salesman Name */}
                <View style={styles?.fieldToFill}>
                  <Text style={styles.placeholder}>Vendedor(a)</Text>
                </View>
              </View>

              {/* Center */}
              <View style={styles?.cardCenter}>
                <Text style={styles?.bigTitle}>{card.title}</Text>
                <Text style={styles?.description}>
                  Nosso sorteio é feito ao vivo no nosso instagram @pixsorte. As
                  20:00 de segunda à sexta
                </Text>
                <View style={styles.flexbox}>
                  <Text style={styles.price}>
                    R${card.unit_price.toFixed(2)}
                  </Text>
                  <Text style={styles.explanation}>
                    O jogador paga R$ 2.50 e recebe um bilhete com 4 milhares.
                    Caso alguma milhar seja sorteada o jogador recebe R$ 600,00.
                    Podendo acumular chegando até R$ 10.000,00
                  </Text>
                </View>
              </View>

              {/* Right */}
              <View style={styles?.cardRight}>
                {values.map((number, index) => {
                  return (
                    <View key={index} style={styles?.random_numbers}>
                      <Text>{number}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </Page>
    </Document>
  );
}
