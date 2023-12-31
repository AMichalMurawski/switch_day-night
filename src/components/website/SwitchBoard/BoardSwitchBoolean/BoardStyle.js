import styled from 'styled-components';

const transitionF = (duration, props) => {
  if (typeof props === 'string') {
    return `${props} ${duration}ms ease-out`;
  }
  if (Array.isArray(props)) {
    const arrayTrans = props
      .map(prop => {
        if (typeof prop === 'string') {
          return `${prop} ${duration}ms ease-out`;
        }
        return null;
      })
      .join(', ');
    return arrayTrans;
  }
};

export const TextBox = styled.div.attrs(props => ({
  $value: props.$value,
  $duration: props.$duration,
}))`
  width: 100%;
  color: ${props => (props.$value === 1 ? 'rgb(210, 210, 210)' : null)};
  background-color: ${props =>
    props.$value === 1 ? 'rgb(100, 100, 100)' : null};
  transition: ${props =>
    transitionF(props.$duration, ['color', 'background-color'])};
`;

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
`;
