const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesleft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesleft) {
      return (
        <>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </>
      );
    }
    if (!winner && !noMovesleft) {
      return (
        <>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};
export default StatusMessage;
