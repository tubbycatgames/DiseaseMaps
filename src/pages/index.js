import React from "react"
import { Map, TileLayer } from "react-leaflet"

import SEO from "../components/seo"

import styles from "./index.module.css"

const position = [39.9526, -75.1652]
const IndexPage = () =>
  typeof window !== "undefined" ? (
    <Map className={styles.map} center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <SEO title="Home" />
    </Map>
  ) : null

export default IndexPage
