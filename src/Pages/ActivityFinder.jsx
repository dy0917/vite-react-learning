import { useState, useEffect } from 'react';
import { useData } from '../utils/useData';

export default function ActivityFinder() {
  // Fetches a random activity

  const [participants, setParticipants] = useState(1);
  const activity = useData(
    `https://www.boredapi.com/api/activity?participants=${participants}`
  );

  const [bool, setBool] = useState(false);
  useEffect(() => {
    console.log('bool effect');
  }, [bool]);

  useEffect(() => {
    console.log('run everytime render triggered');
  });

  useEffect(() => {
    console.log('only run once');
  }, []);

  useEffect(() => {
    console.log('either changes effect');
  }, [bool, participants]);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        <>{activity?.activity}</>
      </div>
      <button
        onClick={() => {
          setBool(!bool);
        }}
      >
        Set bool
      </button>
    </div>
  );
}
