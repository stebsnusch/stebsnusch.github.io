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
        I have increased my Javascript proficiency with React considerably and also have made valuable contribution to our internal System Design libraries.
    </Typography>
    <Typography variant="body2" paragraph>
        This was also my first experience working with Jest (a Javascript testing framework) and learning about Software Architecture. My team constantly
        promotes Tech Talks in order to share knowledge through our peers.
    </Typography>
      <Typography variant="body2" paragraph>
        The projects I worked with have improved significantly the internal Operations team experience, making the company's lead conversion increase and,
        consequently, broadening the company's revenue.
    </Typography>
      <Typography variant="body2">
        As we have freedom within the company to lead our own initiatives, my first one was helping improve our overall guidelines as much
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

      <Typography variant="body2">
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
    description: (<Fragment>
      <Typography variant="body2">
        During my time in Vitrio, I had the chance to work with the e-commerce platform VTEX and help clients increase their sales with high performing 
        pages. I also got to learn about Google Analytics and how to gather customer data in order to deliver a highly customized experience
        during further access.
      </Typography>
    </Fragment>
    ),
  },
  {
    name: 'Épico Digital',
    role: 'Front-End Developer',
    period: '09/2016 - 07/2018',
    description: (<Fragment>
      <Typography variant="body2" paragraph>
        My experience working in Epico has taught me a lot about teamwork and coding best practices. I had the opportunity to work with
        highly skilled developers that guided me all the way.
      </Typography>
      <Typography variant="body2" paragraph>
        I used a lot of the CSS Framwork Bootstrap and the preproccessor Sass, as well as PHP with Laravel. I had to learn how to look through
        the documentation of each technology to understand all their possibilities.
      </Typography>
      <Typography variant="body2">
        Another very important thing I learned was how to use Javascript frameworks. It was the first time I ever heard of Angular and VueJS, that
        became everyday tools to me.
      </Typography>
    </Fragment>
    ),
  },
  {
    name: 'Agência D1UP',
    role: 'Front-End Developer',
    period: '06/2016 - 09/2016',
    description: (<Fragment>
      <Typography variant="body2" paragraph>
        I have participated of the company as an intern, but as soon as I finished college, I was hired. At D1UP we build websites to promote either our
        client's business or a punctual action. 
      </Typography>
      <Typography variant="body2" paragraph>
        I got to learn a lot about CSS properties and best practices and Semantic HTML.
      </Typography>
      <Typography variant="body2">
        Working with a multidisciplinar team has made me understand how to respect schedules and how to communicate with Product Owners and Designers 
        to deliver the best product to the end user.
      </Typography>
    </Fragment>
    ),
  },
]