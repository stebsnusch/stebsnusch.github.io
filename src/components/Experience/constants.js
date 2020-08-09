import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

export const COMPANIES = [
  {
    name: 'QuintoAndar',
    role: 'Software Engineer',
    period: '12/2019 - Present',
    description: (<Fragment>
      <Typography variant="body2" paragraph>
        As a QuintoAndar Software Engineer I get to be challenged every single day.
        Not only I am able to build confidence in various technologies, I also get to mantain a relationship with Product Owners and Designers as well as
        with other Engineers.
      </Typography>

    <Typography variant="body2" paragraph>
        The projects I worked with have improved significantly the internal Operations team experience, making the Company's lead conversion increase and,
        consequently, broadening the Company's revenue.
    </Typography>
    <Typography variant="body2" paragraph>
      As we have freedom within the Company to lead our own initiatives, my first one was helping improve our overall guidelines as much
      as possible. I am also very present in gender equality actions together with other female engineers.
    </Typography>
    </Fragment>),
  },
  {
    name: 'PRORADIS',
    role: 'Fullstack Developer',
    period: '04/2019 - 11/2019',
    description: (<Fragment>
      <Typography variant="body2" paragraph>
        At PRORADIS, I have helped build multi-platform mobile applications with Flutter and Dart. I also had the opportunity to
        learn C# along the way and have my first experience with back-end applications.
      </Typography>

    <Typography variant="body2" paragraph>
        Since the company was on the Medicine field, the project I worked in focused on making patients reports available online through our platform.
        Basically, we intermediated the process of a Doctor writing uploading patient's reports - alongside pictures and any related files -
        online and making it available for download.
    </Typography>
    </Fragment>)

  },
  {
    name: 'Vitrio',
    role: 'Front-End Developer',
    period: '08/2018 - 04/2019',
    description: ''
  },
  {
    name: 'Épico Digital',
    role: 'Front-End Developer',
    period: '',
    description: ''
  },
  {
    name: 'Agência D1UP',
    role: 'Front-End Developer',
    period: '',
    description: ''
  },
]