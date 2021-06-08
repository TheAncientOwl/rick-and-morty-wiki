import CategoryType from './CategoryType';
import CharacterCard from './CharacterCard';
import NotFound from './404-not-found';

export default function cardsOrNotFound(data, type) {
  if (data.length == 0) return <NotFound />;

  switch (type) {
    case CategoryType.character: {
      return (
        <>
          {data.map((item, index) => (
            <CharacterCard
              key={index}
              image={item.image}
              name={item.name}
              status={item.status}
              species={item.species}
              lastKnownLocation={item.location.name}
            />
          ))}
        </>
      );
    }
    case CategoryType.location: {
      break;
    }
    default: {
      console.error('Unknown category type');
    }
  }
}
