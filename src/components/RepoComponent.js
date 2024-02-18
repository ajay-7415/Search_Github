import React from 'react'
import styled from 'styled-components'

const RepoComponent = ({ data }) => {
  const { name, full_name, url, html_url } = data

  return (
    <Wrapper>
      <div>
        <p>{full_name}</p>
        <a href={html_url}>Visit</a>
      </div>
    </Wrapper>
  )
}

export default RepoComponent

const Wrapper = styled.div`
  padding: 0.5vh 1vh;
  margin: 0.5vh auto;
  width: 40vw;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    color: var(--clr-primary-1);
  }
  a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
`
