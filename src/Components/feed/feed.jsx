import { useEffect, useState } from 'react';
import { fetcher } from '../../services';
import * as S from './styles';

export const Feed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher('photos');
      setItems(response);
    };

    makeRequest();
  }, []);

  return (
    <S.Wrapper>
      {items.map((item) => (
        <S.Item key={item.id}>
          <img src={item.urls.small} />
        </S.Item>
      ))}
    </S.Wrapper>
  );
};
