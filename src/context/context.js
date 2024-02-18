import React, { useState, useEffect } from 'react'
import axios from 'axios'
import mockRepo from './mockRepo'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

// proiver -- r GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState([])
  const [repos, setRepos] = useState(paginate(mockRepo))
  const [followers, setFollowers] = useState([])

  const [error, setError] = useState({ show: false, msg: '' })

  const [loading, setLoading] = useState(false)

  const searchGithubUser = async (user) => {
    setError({ show: false, msg: '' })
    setLoading(true)
    try {
      const response = await axios(`${rootUrl}/users/${user}`)
      if (response) {
        setGithubUser(response.data)
        if (response) {
          const { login, followers_url } = response.data

          const response1 = await axios(
            `${rootUrl}/users/${login}/repos?per_page=100`
          )
          const newRepo = paginate(response1.data)
          setRepos(newRepo)
          const response2 = await axios(`${followers_url}?per_page=100`)

          setFollowers(response2.data)
        }
      }
    } catch (error) {
      toggleErro(true, 'Enter correct Profile')
    }
    setLoading(false)
  }

  function toggleErro(show, msg) {
    setError({ show, msg })
  }

  useEffect(() => {
    searchGithubUser('sdras')
  }, [])

  return (
    <GithubContext.Provider
      value={{ githubUser, repos, followers, error, searchGithubUser, loading }}
    >
      {children}
    </GithubContext.Provider>
  )
}
export { GithubContext, GithubProvider }

function paginate(reposs) {
  const itemsPerPage = 10
  const pages = Math.ceil(reposs.length / itemsPerPage)

  const newRepos = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return reposs.slice(start, start + itemsPerPage)
  })
  console.log(newRepos)

  return newRepos
}
