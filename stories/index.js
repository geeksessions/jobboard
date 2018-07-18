import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JobCard from '../src/Components/JobCard';

storiesOf('JobCard', module)
  .add('Collapsed', () => (
    <JobCard job={{
      "_id": "79738da43e6eb8c82fe69c25ee0044c6",
      "_rev": "5-450b5d9199a742090c2b0bb54da93c4e",
      "raw": "Lead Python Developer - Blockex- Huge Investment in Blockchain Exchange Platform- £80,000 - £85,000- LONDON",
      "poster": "sergiosilva",
      "date": "1520856000",
      "links": [
        "vaida@matchglobal.net",
        "https://geeksessions.slack.com/files/U26FJKH6Y/FAZRC5NLB/python_developer_team_leader.docx"
      ]
    }}>
      Hello JobCard
    </JobCard>
  ))
