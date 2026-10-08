import type { CSSProperties } from 'react';

/** A visual teaser, not an embedded game or a simulated score. */
export function WordGamePreview() {
  return <div className="word-game-preview" role="img" aria-label="Deutschle word-game teaser: five tiles spell HALLO above a compact German keyboard.">
    <div className="word-game-caption" aria-hidden="true"><span className="number-label">DEUTSCHLE</span><span className="number-label">German Word Game</span></div>
    <div className="word-game-tiles" aria-hidden="true">{[...'HALLO'].map((letter, index) => <span className={`word-game-tile${index < 2 ? ' word-game-tile--revealed' : ''}`} key={index} style={{ '--tile-index': index } as CSSProperties}>{letter}</span>)}</div>
    <div className="word-game-keyboard" aria-hidden="true">{['QWERTZUIOP', 'ASDFGHJKL', 'YXCVBNM'].map(row => <div className="word-game-key-row" key={row}>{[...row].map(letter => <span key={letter}>{letter}</span>)}</div>)}</div>
  </div>;
}
