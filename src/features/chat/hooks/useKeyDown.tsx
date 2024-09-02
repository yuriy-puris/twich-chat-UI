import { useEffect, useState } from "react";

const useKeyDown = (dataLength: number, ref: any) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [pressedIdx, setPressedIdx] = useState<number | null>(null);

  const handleKeyboard = (event: React.ChangeEvent<any> | any) => {
    switch(event.key) {
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIdx((prevSelectedIndex) => prevSelectedIndex > 0 ? prevSelectedIndex - 1 : dataLength - 1);
        ref?.current?.scrollBy({ top: -50, behavior: 'smooth' });
        break;
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIdx((prevSelectedIndex) => prevSelectedIndex < dataLength - 1 ? prevSelectedIndex + 1 : 0);
        ref?.current?.scrollBy({ top: 50, behavior: 'smooth' });
        break;
      case 'Enter':
        event.preventDefault();
        setPressedIdx(selectedIdx);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const container = ref.current;
    if (container) {
      window.addEventListener('keydown', handleKeyboard);
      if (selectedIdx === 0) {
        ref?.current?.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (selectedIdx === dataLength - 1) {
        ref?.current?.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' });
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    }
  }, [ref, selectedIdx]);

  return {
    selectedIdx,
    pressedIdx,
  };
};

export default useKeyDown;
