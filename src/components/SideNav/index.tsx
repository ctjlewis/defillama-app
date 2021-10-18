import React from 'react'

import DefiSideNav from './DefiSideNav'
import NFTSideNav from './NFTSideNav'

import { useNFTApp } from '../../hooks'

export default function SideNav({ history }) {
  const isNFTApp = useNFTApp()
  if (isNFTApp) {
    return <NFTSideNav />
  }
  return <DefiSideNav />
}