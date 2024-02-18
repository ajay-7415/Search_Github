import React, { useState } from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import RepoComponent from './RepoComponent'
// import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const { repos } = React.useContext(GithubContext)
  const [page, setPage] = useState(0)
  // const [data, setData] = useState(repos[page])

  const data = repos[page]

  const prev = () => {
    if (page > 0) {
      setPage((oldPage) => oldPage - 1)
    }
  }
  const next = () => {
    if (page < 9) {
      setPage((oldPage) => oldPage + 1)
    }
  }

  return (
    <Wrapper>
      {data.map((repoData) => {
        return <RepoComponent key={repoData.id} data={repoData} />
      })}
      <div className='buttons'>
        <button onClick={prev}>Prev</button>
        <p>{page + 1}</p>
        <button onClick={next}>next</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: var(--clr-white);
  width: 60vw;
  margin: 1rem auto;
  padding: 2vh 4vw;
  .buttons {
    display: flex;
    width: auto;
    margin: 0 20vw;
    padding: 0 5vh;
  }

  .buttons button {
    padding: 0 2vh;
    margin: 0 2vh;
    /* background-color: var(--clr-primary-1); */
  }
  button {
    border-radius: 5px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-5);
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
    }
  }
`

export default Repos
