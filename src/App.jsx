
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import WorldCupDetails from './pages/WorldCupDetails.jsx';
import './App.css';

const worldCupYears = [
  1930, 1934, 1938, 1942, 1946, 1950, 1954, 1958, 1962, 1966,
  1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006,
  2010, 2014, 2018, 2022, 2026,
];

const playlistId = 'PLGEmDR2iF7X0';

const matchVideoNumbers = Array.from(
  { length: 104 },
  (_, index) => index + 1
);

const topScorers = [
  { rank: 1, name: 'Kylian Mbappé', country: 'France', flagCode: 'fr', goals: 10, assists: 4 },
  { rank: 2, name: 'Lionel Messi', country: 'Argentina', flagCode: 'ar', goals: 8, assists: 4 },
  { rank: 3, name: 'Jude Bellingham', country: 'England', flagCode: 'gb-eng', goals: 7, assists: 1 },
  { rank: 4, name: 'Erling Haaland', country: 'Norway', flagCode: 'no', goals: 7, assists: 0 },
  { rank: 5, name: 'Ousmane Dembélé', country: 'France', flagCode: 'fr', goals: 6, assists: 2 },
  { rank: 6, name: 'Harry Kane', country: 'England', flagCode: 'gb-eng', goals: 6, assists: 1 },
  { rank: 7, name: 'Mikel Oyarzabal', country: 'Spain', flagCode: 'es', goals: 5, assists: 1 },
  { rank: 8, name: 'Ismaïla Sarr', country: 'Senegal', flagCode: 'sn', goals: 4, assists: 1 },
  { rank: 9, name: 'Julián Quiñones', country: 'Mexico', flagCode: 'mx', goals: 4, assists: 1 },
  { rank: 10, name: 'Vinícius Júnior', country: 'Brazil', flagCode: 'br', goals: 4, assists: 1 },
];

const individualAwards = [
  { title: 'Golden Ball', winner: 'Rodri', country: 'Spain', flagCode: 'es' },
  { title: 'Golden Boot', winner: 'Kylian Mbappé', country: 'France · 10 goals', flagCode: 'fr' },
  { title: 'Golden Glove', winner: 'Unai Simón', country: 'Spain · 7 clean sheets', flagCode: 'es' },
  { title: 'Young Player', winner: 'Pau Cubarsí', country: 'Spain', flagCode: 'es' },
  { title: 'Silver Ball', winner: 'Lionel Messi', country: 'Argentina', flagCode: 'ar' },
  { title: 'Bronze Ball', winner: 'Kylian Mbappé', country: 'France', flagCode: 'fr' },
  { title: 'Silver Boot', winner: 'Lionel Messi', country: 'Argentina · 8 goals', flagCode: 'ar' },
  { title: 'Bronze Boot', winner: 'Jude Bellingham', country: 'England · 7 goals', flagCode: 'gb-eng' },
  { title: 'Fair Play Trophy', winner: 'Netherlands', country: 'Team award', flagCode: 'nl' },
];

function CountryFlag({ code, country }) {
  const flagUrl =
    code === 'gb-eng'
      ? 'https://flagcdn.com/gb-eng.svg'
      : `https://flagcdn.com/w40/${code}.png`;

  return (
    <img
      className="country-flag"
      src={flagUrl}
      alt={`${country} flag`}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}

function CountryName({ code, country }) {
  return (
    <span className="country-cell">
      <CountryFlag code={code} country={country} />
      <span>{country}</span>
    </span>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const [warMessage, setWarMessage] = useState('');

  const handleYearClick = (year) => {
    if (year === 1942 || year === 1946) {
      setWarMessage(
        `The FIFA World Cup was not held in ${year} because of World War II.`
      );
      return;
    }

    setWarMessage('');
    navigate(`/world-cup/${year}`);
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-content">
          <div className="brand-mark">FIFA</div>
          <div>
            <p className="eyebrow">THE WORLD'S BIGGEST FOOTBALL STAGE</p>
            <h1>FIFA World Cup History</h1>
            <p className="header-description">
              Explore the tournaments, teams, legends and unforgettable
              moments from World Cup history.
            </p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="years-section">
          <div className="section-heading">
            <p className="eyebrow">EXPLORE THE TOURNAMENTS</p>
            <h2>World Cup by Year</h2>
            <p>Select a year to explore its FIFA World Cup history.</p>
          </div>

          <div className="year-buttons">
            {worldCupYears.map((year) => (
              <button
                key={year}
                type="button"
                className={`year-button ${year === 2026 ? 'current-year' : ''}`}
                onClick={() => handleYearClick(year)}
              >
                {year}
                {year === 2026 && <span className="year-tag">Latest</span>}
              </button>
            ))}
          </div>

          {warMessage && (
            <div className="war-message" role="status">
              <span className="message-icon">ⓘ</span>
              <p>{warMessage}</p>
              <button
                type="button"
                className="message-close"
                onClick={() => setWarMessage('')}
                aria-label="Close message"
              >
                ×
              </button>
            </div>
          )}
        </section>

        <section className="matches-section">
          <div className="section-heading">
            <p className="eyebrow">WATCH AND RELIVE</p>
            <h2>World Cup Match Videos</h2>
            <p>
              Scroll horizontally to browse the 104 video links in the
              playlist. Select a match to open it on YouTube.
            </p>
          </div>

          <div className="matches-scroll">
            {matchVideoNumbers.map((matchNumber) => (
              <a
                className="match-link"
                key={matchNumber}
                href={`https://www.youtube.com/playlist?list=${playlistId}&index=${matchNumber}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open World Cup video ${matchNumber} on YouTube`}
              >
                <span className="play-icon">▶</span>
                <span className="match-link-text">
                  <strong>
                    Video {String(matchNumber).padStart(2, '0')}
                  </strong>
                  <small>Watch on YouTube</small>
                </span>
                <span className="external-icon">↗</span>
              </a>
            ))}
          </div>

          <p className="scroll-hint">
            ← Scroll or swipe to see more videos →
          </p>
        </section>

        <section className="tournament-stats">
          <div className="section-heading">
            <p className="eyebrow">TOURNAMENT OVERVIEW</p>
            <h2>2026 FIFA World Cup Statistics</h2>
            <p>
              Tournament information and statistics displayed in this
              section.
            </p>
          </div>

          <div className="final-result-card">
            <div className="champion-label">CURRENT WORLD CUP CHAMPIONS</div>

            <div className="champion-name">
              <CountryFlag code="es" country="Spain" />
              <span>Spain</span>
            </div>

            <div className="final-match">
              <div className="final-team">
                <CountryFlag code="es" country="Spain" />
                <span>Spain</span>
              </div>

              <div className="final-score">
                <strong>1</strong>
                <span>–</span>
                <strong>0</strong>
              </div>

              <div className="final-team">
                <CountryFlag code="ar" country="Argentina" />
                <span>Argentina</span>
              </div>
            </div>

            <p className="final-scorer">
              Ferran Torres · 106th minute (extra time)
            </p>
            <p className="final-venue">
              19 July 2026 · New York New Jersey Stadium
            </p>
          </div>

          <div className="stats-grid">
            <article className="stat-card">
              <span className="stat-icon">⚽</span>
              <p className="stat-label">Matches</p>
              <strong className="stat-value">104</strong>
            </article>

            <article className="stat-card">
              <span className="stat-icon">🌍</span>
              <p className="stat-label">Teams</p>
              <strong className="stat-value">48</strong>
            </article>

            <article className="stat-card">
              <span className="stat-icon">🥅</span>
              <p className="stat-label">Goals</p>
              <strong className="stat-value">308</strong>
            </article>

            <article className="stat-card">
              <span className="stat-icon">📊</span>
              <p className="stat-label">Goals per Match</p>
              <strong className="stat-value">2.96</strong>
            </article>

            <article className="stat-card">
              <span className="stat-icon">👥</span>
              <p className="stat-label">Attendance</p>
              <strong className="stat-value">6.81M</strong>
            </article>

            <article className="stat-card hosts-card">
              <span className="stat-icon">🏟️</span>
              <p className="stat-label">Host Countries</p>
              <strong className="stat-value">3</strong>
              <div className="host-flags">
                <CountryFlag code="ca" country="Canada" />
                <CountryFlag code="mx" country="Mexico" />
                <CountryFlag code="us" country="United States" />
              </div>
              <small>Canada · Mexico · USA</small>
            </article>
          </div>

          <section className="scorers-section">
            <div className="section-heading compact-heading">
              <p className="eyebrow">GOALS AND ASSISTS</p>
              <h2>Top Scorers</h2>
            </div>

            <div className="scorers-table-wrapper">
              <table className="scorers-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Country</th>
                    <th>Goals</th>
                    <th>Assists</th>
                  </tr>
                </thead>
                <tbody>
                  {topScorers.map((player) => (
                    <tr key={`${player.rank}-${player.name}`}>
                      <td className="rank-cell">
                        {String(player.rank).padStart(2, '0')}
                      </td>
                      <td className="player-name">{player.name}</td>
                      <td>
                        <CountryName
                          code={player.flagCode}
                          country={player.country}
                        />
                      </td>
                      <td className="number-cell">{player.goals}</td>
                      <td className="number-cell">{player.assists}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="awards-section">
            <div className="section-heading compact-heading">
              <p className="eyebrow">INDIVIDUAL HONOURS</p>
              <h2>Tournament Awards</h2>
            </div>

            <div className="awards-grid">
              {individualAwards.map((award) => (
                <article className="award-card" key={award.title}>
                  <div className="award-icon">🏆</div>
                  <p className="award-title">{award.title}</p>
                  <h3>{award.winner}</h3>
                  <CountryName
                    code={award.flagCode}
                    country={award.country}
                  />
                </article>
              ))}
            </div>
          </section>

          <section className="third-place-section">
            <div className="third-place-card">
              <div className="third-place-icon">🥉</div>
              <div className="third-place-content">
                <p className="eyebrow">THIRD-PLACE MATCH</p>
                <h2>England 6–4 France</h2>
                <p>
                  Third-place match result displayed for the tournament.
                </p>
              </div>
              <CountryFlag code="gb-eng" country="England" />
            </div>
          </section>

          <p className="data-note">
            Note: Verify tournament results, player statistics and awards
            against official FIFA records before publishing this page.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">FIFA World Cup History</div>
        <p>
          Celebrating the history, teams and unforgettable moments of
          international football.
        </p>
        <a
          href="https://www.fifa.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visit FIFA.com ↗
        </a>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/world-cup/:year"
          element={<WorldCupDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}
