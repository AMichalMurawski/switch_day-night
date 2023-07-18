import icons from '../../../images/icons.svg';
import { scale, transition } from '../../utils/dimData';

export const IconCross = ({ props }) => {
  const { height, move, moveDuration } = props;

  return (
    <svg
      style={{
        position: 'absolute',
        top: '50%',
        left: scale(0.5, height),
        transform: 'translate(-50%, -50%)',
        fill: 'red',
        opacity: `${move}`,
        transition: transition(moveDuration, 'opacity'),
      }}
      xmlns="http://www.w3.org/2000/svg"
      width={scale(0.6, height)}
      height={scale(0.6, height)}
      viewBox={`0 0 ${scale(0.6, height, '')} ${scale(0.6, height, '')}`}
    >
      <use xlinkHref={icons + '#icon-cross'} />
    </svg>
  );
};
