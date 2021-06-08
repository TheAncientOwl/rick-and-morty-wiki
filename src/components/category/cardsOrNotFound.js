import CategoryType from '../../CategoryType';
import CharacterCard from './CharacterCard';
import LocationCard from './LocationCard';
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
              image={item.image || ''}
              name={item.name || ''}
              status={item.status || ''}
              species={item.species || ''}
              lastKnownLocation={item.location ? item.location.name : ''}
            />
          ))}
        </>
      );
    }

    case CategoryType.location: {
      return (
        <>
          {data.map((item, index) => (
            <LocationCard key={index} name={item.name} />
          ))}
        </>
      );
    }
    default: {
      console.error('Unknown category type');
    }
  }
}
