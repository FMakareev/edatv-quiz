import React from "react"
import "../../styles/ContentMainPage/contentMainPage.scss"

/** Components */
import Insert from "./Insert"
import ContentPage from "./ContentPage"

export default function ContentMainPage() {
  return (
    <div className={"wrapper"}>
      <ContentPage />

      <Insert />
    </div>
  )
}
