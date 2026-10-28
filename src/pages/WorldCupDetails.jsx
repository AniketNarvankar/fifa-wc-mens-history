
import { useNavigate, useParams } from "react-router-dom";
import "../pages/WorldCupDetails.css"

const tournaments = {
  1930: {
    host: "Uruguay",
    champion: "Uruguay",
    runnerUp: "Argentina",
    final: "4–2",
    third: "United States",
    thirdScore: "Third-place match not played",
    boot: "Guillermo Stábile (Argentina) — 8 goals",
    ball: null,
    glove: null,
    teams: [
      "Argentina", "Belgium", "Bolivia", "Brazil", "Chile", "France",
      "Mexico", "Paraguay", "Peru", "Romania", "United States",
      "Uruguay", "Yugoslavia"
    ]
  },
  1934: {
    host: "Italy",
    champion: "Italy",
    runnerUp: "Czechoslovakia",
    final: "2–1 (AET)",
    third: "Germany",
    thirdScore: "Germany 3–2 Austria",
    boot: "Oldřich Nejedlý (Czechoslovakia) — 5 goals",
    ball: null,
    glove: null,
    teams: [
      "Argentina", "Austria", "Belgium", "Brazil", "Czechoslovakia",
      "Egypt", "France", "Germany", "Hungary", "Italy", "Netherlands",
      "Romania", "Spain", "Sweden", "Switzerland", "United States"
    ]
  },
  1938: {
    host: "France",
    champion: "Italy",
    runnerUp: "Hungary",
    final: "4–2",
    third: "Brazil",
    thirdScore: "Brazil 4–2 Sweden",
    boot: "Leônidas (Brazil) — 7 goals",
    ball: null,
    glove: null,
    teams: [
      "Belgium", "Brazil", "Cuba", "Czechoslovakia", "Dutch East Indies",
      "France", "Germany", "Hungary", "Italy", "Netherlands", "Norway",
      "Poland", "Romania", "Sweden", "Switzerland"
    ]
  },
  1950: {
    host: "Brazil",
    champion: "Uruguay",
    runnerUp: "Brazil",
    final: "2–1 (final-round deciding match)",
    third: "Sweden",
    thirdScore: "Final-round format; no separate third-place match",
    boot: "Ademir (Brazil) — 8 goals",
    ball: null,
    glove: null,
    teams: [
      "Bolivia", "Brazil", "Chile", "England", "Italy", "Mexico",
      "Paraguay", "Spain", "Sweden", "Switzerland", "Uruguay",
      "United States", "Yugoslavia"
    ]
  },
  1954: {
    host: "Switzerland",
    champion: "West Germany",
    runnerUp: "Hungary",
    final: "3–2",
    third: "Austria",
    thirdScore: "Austria 3–1 Uruguay",
    boot: "Sándor Kocsis (Hungary) — 11 goals",
    ball: null,
    glove: null
  },
  1958: {
    host: "Sweden",
    champion: "Brazil",
    runnerUp: "Sweden",
    final: "5–2",
    third: "France",
    thirdScore: "France 6–3 West Germany",
    boot: "Just Fontaine (France) — 13 goals",
    ball: null,
    glove: null
  },
  1962: {
    host: "Chile",
    champion: "Brazil",
    runnerUp: "Czechoslovakia",
    final: "3–1",
    third: "Chile",
    thirdScore: "Chile 1–0 Yugoslavia",
    boot: "Six players shared top scorer honours — 4 goals each",
    ball: null,
    glove: null
  },
  1966: {
    host: "England",
    champion: "England",
    runnerUp: "West Germany",
    final: "4–2 (AET)",
    third: "Portugal",
    thirdScore: "Portugal 2–1 Soviet Union",
    boot: "Eusébio (Portugal) — 9 goals",
    ball: null,
    glove: null
  },
  1970: {
    host: "Mexico",
    champion: "Brazil",
    runnerUp: "Italy",
    final: "4–1",
    third: "West Germany",
    thirdScore: "West Germany 1–0 Uruguay",
    boot: "Gerd Müller (West Germany) — 10 goals",
    ball: null,
    glove: null
  },
  1974: {
    host: "West Germany",
    champion: "West Germany",
    runnerUp: "Netherlands",
    final: "2–1",
    third: "Poland",
    thirdScore: "Poland 1–0 Brazil",
    boot: "Grzegorz Lato (Poland) — 7 goals",
    ball: null,
    glove: null
  },
  1978: {
    host: "Argentina",
    champion: "Argentina",
    runnerUp: "Netherlands",
    final: "3–1 (AET)",
    third: "Brazil",
    thirdScore: "Brazil 2–1 Italy",
    boot: "Mario Kempes (Argentina) — 6 goals",
    ball: null,
    glove: null
  },
  1982: {
    host: "Spain",
    champion: "Italy",
    runnerUp: "West Germany",
    final: "3–1",
    third: "Poland",
    thirdScore: "Poland 3–2 France",
    boot: "Paolo Rossi (Italy) — 6 goals",
    ball: "Paolo Rossi (Italy)",
    glove: null
  },
  1986: {
    host: "Mexico",
    champion: "Argentina",
    runnerUp: "West Germany",
    final: "3–2",
    third: "France",
    thirdScore: "France 4–2 Belgium (AET)",
    boot: "Gary Lineker (England) — 6 goals",
    ball: "Diego Maradona (Argentina)",
    glove: null
  },
  1990: {
    host: "Italy",
    champion: "West Germany",
    runnerUp: "Argentina",
    final: "1–0",
    third: "Italy",
    thirdScore: "Italy 2–1 England",
    boot: "Salvatore Schillaci (Italy) — 6 goals",
    ball: "Salvatore Schillaci (Italy)",
    glove: null
  },
  1994: {
    host: "United States",
    champion: "Brazil",
    runnerUp: "Italy",
    final: "0–0; Brazil won 3–2 on penalties",
    third: "Sweden",
    thirdScore: "Sweden 4–0 Bulgaria",
    boot: "Hristo Stoichkov (Bulgaria) and Oleg Salenko (Russia) — 6 goals",
    ball: "Romário (Brazil)",
    glove: "Michel Preud'homme (Belgium)"
  },
  1998: {
    host: "France",
    champion: "France",
    runnerUp: "Brazil",
    final: "3–0",
    third: "Croatia",
    thirdScore: "Croatia 2–1 Netherlands",
    boot: "Davor Šuker (Croatia) — 6 goals",
    ball: "Ronaldo (Brazil)",
    glove: "Fabien Barthez (France)"
  },
  2002: {
    host: "South Korea and Japan",
    champion: "Brazil",
    runnerUp: "Germany",
    final: "2–0",
    third: "Turkey",
    thirdScore: "Turkey 3–2 South Korea",
    boot: "Ronaldo (Brazil) — 8 goals",
    ball: "Oliver Kahn (Germany)",
    glove: "Oliver Kahn (Germany)"
  },
  2006: {
    host: "Germany",
    champion: "Italy",
    runnerUp: "France",
    final: "1–1; Italy won 5–3 on penalties",
    third: "Germany",
    thirdScore: "Germany 3–1 Portugal",
    boot: "Miroslav Klose (Germany) — 5 goals",
    ball: "Zinedine Zidane (France)",
    glove: "Gianluigi Buffon (Italy)"
  },
  2010: {
    host: "South Africa",
    champion: "Spain",
    runnerUp: "Netherlands",
    final: "1–0 (AET)",
    third: "Germany",
    thirdScore: "Germany 3–2 Uruguay",
    boot: "Thomas Müller (Germany) — 5 goals",
    ball: "Diego Forlán (Uruguay)",
    glove: "Iker Casillas (Spain)"
  },
  2014: {
    host: "Brazil",
    champion: "Germany",
    runnerUp: "Argentina",
    final: "1–0 (AET)",
    third: "Netherlands",
    thirdScore: "Netherlands 3–0 Brazil",
    boot: "James Rodríguez (Colombia) — 6 goals",
    ball: "Lionel Messi (Argentina)",
    glove: "Manuel Neuer (Germany)"
  },
  2018: {
    host: "Russia",
    champion: "France",
    runnerUp: "Croatia",
    final: "4–2",
    third: "Belgium",
    thirdScore: "Belgium 2–0 England",
    boot: "Harry Kane (England) — 6 goals",
    ball: "Luka Modrić (Croatia)",
    glove: "Thibaut Courtois (Belgium)"
  },
  2022: {
    host: "Qatar",
    champion: "Argentina",
    runnerUp: "France",
    final: "3–3 after extra time; Argentina won 4–2 on penalties",
    third: "Croatia",
    thirdScore: "Croatia 2–1 Morocco",
    boot: "Kylian Mbappé (France) — 8 goals",
    ball: "Lionel Messi (Argentina)",
    glove: "Emiliano Martínez (Argentina)",
    teams: [
      "Argentina", "Australia", "Belgium", "Brazil", "Cameroon",
      "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador",
      "England", "France", "Germany", "Ghana", "Iran", "Japan",
      "Mexico", "Morocco", "Netherlands", "Poland", "Portugal",
      "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea",
      "Spain", "Switzerland", "Tunisia", "United States", "Uruguay",
      "Wales"
    ]
  },
  2026: {
    host: "Canada, Mexico and United States",
    champion: "Spain",
    runnerUp: "Argentina",
    final: "1–0 (AET)",
    third: "England",
    thirdScore: "England 6–4 France",
    boot: "Kylian Mbappé (France) — 10 goals",
    ball: "Rodri (Spain)",
    glove: "Unai Simón (Spain)",
    teams: [
      "Algeria", "Argentina", "Australia", "Austria", "Belgium",
      "Brazil", "Canada", "Cabo Verde", "Colombia", "Congo DR",
      "Croatia", "Curaçao", "Czechia", "Ecuador", "Egypt",
      "England", "France", "Germany", "Ghana", "Haiti",
      "Iran", "Iraq", "Ivory Coast", "Japan", "Jordan",
      "Mexico", "Morocco", "Netherlands", "New Zealand", "Norway",
      "Panama", "Paraguay", "Portugal", "Qatar", "Saudi Arabia",
      "Scotland", "Senegal", "South Africa", "South Korea",
      "Spain", "Sweden", "Switzerland", "Tunisia", "Turkey",
      "United States", "Uruguay", "Uzbekistan", "Wales"
    ]
  }
};

const noTournamentYears = [1942, 1946];

function InfoCard({ title, children }) {
  return (
    <section className="info-card">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default function WorldCupDetails() {
  const { year } = useParams();
  const navigate = useNavigate();
  const data = tournaments[year];

  if (noTournamentYears.includes(Number(year))) {
    return (
      <div className="details-page">
        <header className="details-header">
          <button onClick={() => navigate("/")} className="back-button">
            ← All years
          </button>
          <p className="section-kicker">WORLD CUP ARCHIVE</p>
          <h1>{year} FIFA World Cup</h1>
        </header>
        <main className="details-layout">
          <InfoCard title="Tournament cancelled">
            <p>
              The {year} FIFA World Cup was not held because of World War II.
            </p>
          </InfoCard>
        </main>
      </div>
    );
  }

  return (
    <div className="details-page">
      <header className="details-header">
        <button onClick={() => navigate("/")} className="back-button">
          ← All years
        </button>
        <p className="section-kicker">WORLD CUP ARCHIVE</p>
        <h1>{year} FIFA World Cup</h1>
        <p className="details-host">
          {data?.host ? `Host: ${data.host}` : "Tournament history"}
        </p>
      </header>

      <main className="details-layout">
        {!data ? (
          <InfoCard title="Historical data">
            <p>
              The results and awards for this edition have not been added to
              this dataset yet. Check the official FIFA archive for verified
              details.
            </p>
            <a
              className="primary-link"
              href="https://www.archives.fifa.com/fifa_world_cup"
              target="_blank"
              rel="noreferrer"
            >
              Open FIFA World Cup archive ↗
            </a>
          </InfoCard>
        ) : (
          <>
            <section className="champion-banner">
              <span className="trophy">🏆</span>
              <div>
                <p className="section-kicker">WORLD CHAMPIONS</p>
                <h2>{data.champion}</h2>
                <p>{year} FIFA World Cup winners</p>
              </div>
            </section>

            <div className="details-grid">
              <InfoCard title="Final match">
                <p className="match-line">
                  <strong>{data.champion}</strong>
                  <span className="score">{data.final}</span>
                  <strong>{data.runnerUp}</strong>
                </p>
                <p className="muted">
                  {data.champion} — Champions · {data.runnerUp} — Runners-up
                </p>
              </InfoCard>

              <InfoCard title="Third-place finish">
                <h2 className="award-name">{data.third}</h2>
                <p>{data.thirdScore}</p>
              </InfoCard>

              <InfoCard title="Golden Ball">
                <h2 className="award-name">
                  {data.ball || "Not awarded / data unavailable"}
                </h2>
                <p>Best player of the tournament, where awarded.</p>
              </InfoCard>

              <InfoCard title="Golden Boot">
                <h2 className="award-name">{data.boot || "Data unavailable"}</h2>
                <p>Top goalscorer(s) of the tournament.</p>
              </InfoCard>

              <InfoCard title="Golden Glove">
                <h2 className="award-name">
                  {data.glove || "Not awarded / data unavailable"}
                </h2>
                <p>
                  This award was introduced in 1994. Earlier editions did not
                  have the Golden Glove award.
                </p>
              </InfoCard>

              <InfoCard title="Participating teams">
                {data.teams ? (
                  <>
                    <p className="team-count">{data.teams.length} teams listed</p>
                    <div className="teams-list">
                      {data.teams.map((team) => (
                        <span className="team-chip" key={team}>
                          {team}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <p>
                    The complete team list has not yet been added for this
                    edition. Use FIFA's official archive to verify the
                    participating nations.
                  </p>
                )}
              </InfoCard>
            </div>
          </>
        )}

        <div className="details-footer-link">
          <a
            href="https://www.archives.fifa.com/fifa_world_cup"
            target="_blank"
            rel="noreferrer"
          >
            Verify historical records in the FIFA archive ↗
          </a>
        </div>
      </main>
    </div>
  );
}
