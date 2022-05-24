import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';


describe('Teams Page', () => {
  beforeEach(() => {
    render(<App />);
  })
  
  it("There's a search box in this page", () => {
    const searchBox = screen.getByPlaceholderText(/search/i)
    expect(searchBox).toBeInTheDocument()
  })

  it("Searchbox can be filled with value", () => {
    const searchBox = screen.getByPlaceholderText(/search/i)
    user.type(searchBox, 'wee')
    expect(searchBox.value).toBe('wee')
  })

  it("Teams are filtered accordingly the searchbox value", () => {
    const searchBox = screen.getByPlaceholderText(/search/i)
    user.type(searchBox, 'wee')
    setTimeout(() => {
      const teamsList = document.getElementsByClassName('teams-list')
      expect(teamsList.length).toBe(1)
    }, 600)
  })
});
