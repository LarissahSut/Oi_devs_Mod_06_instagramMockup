import { useEffect, useState } from 'react';
import { Loading } from '../../ui/loading';
import { fetcher } from '../../services';
import * as S from './styles';
import { Text } from '../../ui/Text';

export const Feed = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetcher('photos');
        setItems(response);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    makeRequest();
  }, []);

  return (
    <S.Wrapper>
      {isLoading && <Loading/>}
      {hasError && <Text>Epa, deu ruim</Text>}
      {items.map((item) => (
        <S.Item key={item.id}>
          <S.Image src={item.urls.small} />
        </S.Item>
      ))}
    </S.Wrapper>
  );
};
