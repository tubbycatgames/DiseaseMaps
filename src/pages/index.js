import React, { Component } from "react"
import { Map, TileLayer } from "react-leaflet"

import SEO from "../components/seo"

import styles from "./index.module.css"

const startZoom = 6

export default class IndexPage extends Component {
  state = {
    startPosition: undefined,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const startPosition = [coords.latitude, coords.longitude]
        this.setState({ startPosition })
      },
      () => this.setState({ startPosition: [0, 0] })
    )
  }

  render() {
    return typeof window !== "undefined" && this.state.startPosition ? (
      <Map
        className={styles.map}
        center={this.state.startPosition}
        zoom={startZoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <SEO title="Home" />
      </Map>
    ) : null
  }
}
