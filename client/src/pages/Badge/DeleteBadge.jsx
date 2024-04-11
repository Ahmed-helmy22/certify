import React from 'react'
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';

export  const action = async({params}) => {
    try {
        await customFetch.delete(`/badge/deleteBadge/${params.badgeId}`);
        toast.success('Badge delete successfully')
    } catch (error) {
        toast.error(error?.response?.data?.message)
        return error
    }
    return redirect('/dashboard/academy/all-badges')
}
