import {
  Card,
  CardImage,
  CardImageWrapper,
  VerticalDivider,
  CardDetails,
  CardName,
  Section,
  Subtitle,
  Title,
} from '../CardElements';
import NotFound from '../not-found';

export default function characterCardsOrNotFound(data) {
  if (!data) return <NotFound />;
  return (
    <>
      {data.map((item, index) => (
        <Card key={index}>
          <CardImageWrapper>
            <CardImage src={item.image} alt={item.name} />
          </CardImageWrapper>

          <VerticalDivider />

          <CardDetails>
            <CardName>{item.name}</CardName>

            {[
              { title: 'Status: ', subtitle: item.status },
              { title: 'Species: ', subtitle: item.species },
              {
                title: 'Last known location: ',
                subtitle: (
                  <>
                    <br />
                    {item.location.name}
                  </>
                ),
              },
            ].map((item, index) => (
              <Section key={index}>
                <Title>{item.title}</Title>
                <Subtitle>{item.subtitle}</Subtitle>
              </Section>
            ))}
          </CardDetails>
        </Card>
      ))}
    </>
  );
}
