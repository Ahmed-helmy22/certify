import React from 'react'
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';

export const loader = async() => {
    // getCanandidatesBadges
    try {
     const holderBadges = await customFetch.get('provider/getCanandidatesBadges')
     return holderBadges
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  }

const Table = () => {
  return (
    <>
    <Row type='horizontal'>
        <Heading as='h1'>Badges Holder</Heading>
    </Row>
    <Row>
        <
    </Row>
    </>
  )
}

export default Table