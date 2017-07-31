import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types'


function TicketList(props){
  return(
    <Ticket
      location='3a'
      names='Alex and Haley'
      issue="Firebase won't save record"/>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
}

export default TicketList;
