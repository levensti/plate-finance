import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';


const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10vh 0',
};

const styles = {
  cardStyles: {
    root: {
      background: 'white',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  amount: {
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30,
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4',
    }
  }
};

const cards = [
  {
    title: 'A',
    amount: '$1',
    percentage: '2',
  },
  {
    title: 'B',
    amount: '$3',
    percentage: '4'
  },
  {
    title: 'C',
    amount: '$5',
    percentage: '6'
  }
]

const CardsSection = () => {
  initializeIcons();
  return (
    <div style={container}>
      {cards.map((card) => (
        <div className="s-Grid-col ms-sm3 ms-xl3">
          <Card styles={styles.cardStyles}>
            <Card.Section>
              <Card.Item>
                <Text styles={styles.header}>{card.title}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.amount}>{card.amount}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.percentage}>
                  {card.percentage} %
                </Text>
              </Card.Item>
            </Card.Section>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;