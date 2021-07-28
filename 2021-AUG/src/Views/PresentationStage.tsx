import React from 'react';
import Schedule from '../Schedule';
import getSchedules from "../schedules";

const PresentationStage: React.FC = () => {
  return <Schedule scheduleList={getSchedules()} />;
}

export default PresentationStage;
