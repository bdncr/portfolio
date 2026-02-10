export const Achievements = ({ achievements }) => {
  return (
    <div className="achievements-container">
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-image">
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className="achievement-photo"
              />
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <div className="achievement-meta">
                <span className="achievement-year">{achievement.year}</span>
                {achievement.organization && (
                  <span className="achievement-org">{achievement.organization}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
