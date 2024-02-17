import React, { useState, useEffect } from 'react'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

// proiver -- r GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState([])
  const [repos, setRepos] = useState({})
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
          setRepos(response1.data)
          const response2 = await axios(`${followers_url}?per_page=100`)
          setFollowers(response2.data)

          console.log(response1, response2, 'res')
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
