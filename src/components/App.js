import React, { useState, useEffect } from 'react'
import Button from './Button'
import Input from './Input'

function App() {
  const katakana = [
    { romanji: 'a', katakana: 'ア'},
    { romanji: 'ka', katakana: 'カ'},
    { romanji: 'sa', katakana: 'サ'},
    { romanji: 'ta', katakana: 'タ'},
    { romanji: 'na', katakana: 'ナ'},
    { romanji: 'i', katakana: 'イ'},
    { romanji: 'ki', katakana: 'キ'},
    { romanji: 'shi', katakana: 'シ'},
    { romanji: 'chi', katakana: 'チ'},
    { romanji: 'ni', katakana: 'ニ'},
    { romanji: 'u', katakana: 'ウ'},
    { romanji: 'ku', katakana: 'ク'},
    { romanji: 'su', katakana: 'ス'},
    { romanji: 'tsu', katakana: 'ツ'},
    { romanji: 'nu', katakana: 'ヌ'},
    { romanji: 'e', katakana: 'エ'},
    { romanji: 'ke', katakana: 'ケ'},
    { romanji: 'se', katakana: 'セ'},
    { romanji: 'te', katakana: 'テ'},
    { romanji: 'ne', katakana: 'ネ'},
    { romanji: 'o', katakana: 'ネ'},
    { romanji: 'ko', katakana: 'コ'},
    { romanji: 'so', katakana: 'ソ'},
    { romanji: 'to', katakana: 'ト'},
    { romanji: 'no', katakana: 'ノ'},
    { romanji: 'v', katakana: 'ヴ'},
    { romanji: 'n', katakana: 'ン'},
    { romanji: 'ha', katakana: 'ハ'},
    { romanji: 'ma', katakana: 'マ'},
    { romanji: 'ya', katakana: 'ヤ'},
    { romanji: 'ra', katakana: 'ラ'},
    { romanji: 'hi', katakana: 'ヒ'},
    { romanji: 'mi', katakana: 'ミ'},
    { romanji: 'ri', katakana: 'リ'},
    { romanji: 'fu', katakana: 'フ'},
    { romanji: 'mu', katakana: 'ム'},
    { romanji: 'yu', katakana: 'ユ'},
    { romanji: 'ru', katakana: 'ル'},
    { romanji: 'he', katakana: 'ヘ'},
    { romanji: 'me', katakana: 'メ'},
    { romanji: 're', katakana: 'レ'},
    { romanji: 'ho', katakana: 'ホ'},
    { romanji: 'mo', katakana: 'モ'},
    { romanji: 'yo', katakana: 'ヨ'},
    { romanji: 'ro', katakana: 'ロ'},
    { romanji: 'wa', katakana: 'ワ'},
    { romanji: 'ga', katakana: 'ガ'},
    { romanji: 'za', katakana: 'ザ'},
    { romanji: 'da', katakana: 'ダ'},
    { romanji: 'ba', katakana: 'バ'},
    { romanji: 'pa', katakana: 'パ'},
    { romanji: 'wi', katakana: 'ヰ'},
    { romanji: 'gi', katakana: 'ギ'},
    { romanji: 'ji', katakana: 'ジ'},
    { romanji: 'dji', katakana: 'ヂ'},
    { romanji: 'bi', katakana: 'ビ'},
    { romanji: 'pi', katakana: 'ピ'},
    { romanji: 'gu', katakana: 'グ'},
    { romanji: 'zu', katakana: 'ズ'},
    { romanji: 'dzu', katakana: 'ヅ'},
    { romanji: 'bu', katakana: 'ブ'},
    { romanji: 'pu', katakana: 'プ'},
    { romanji: 'we', katakana: 'ヱ'},
    { romanji: 'ge', katakana: 'ゲ'},
    { romanji: 'ze', katakana: 'ゼ'},
    { romanji: 'de', katakana: 'デ'},
    { romanji: 'be', katakana: 'ベ'},
    { romanji: 'pe', katakana: 'ペ'},
    { romanji: 'wo', katakana: 'ヲ'},
    { romanji: 'go', katakana: 'ゴ'},
    { romanji: 'zo', katakana: 'ゾ'},
    { romanji: 'do', katakana: 'ド'},
    { romanji: 'bo', katakana: 'ボ'},
    { romanji: 'po', katakana: 'ポ'},
  ]

  const [input, setInput] = useState('')
  const [letter, setLetter] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [error, setError] = useState(false)
  const [isLight, setIsLight] = useState(false)

  const setRandomKatakana = () => {
    const randomLetter = Math.floor(Math.random() * katakana.length)
    setLetter(randomLetter)
  }

  const handleChange = (e) => setInput(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.toLowerCase() === katakana[letter].romanji) {
      setStreak (streak + 1)
      setMaxStreak(Math.max(streak + 1, maxStreak))
      setError(false)
      sessionStorage.setItem('maxStreak', Math.max(streak, maxStreak))
      sessionStorage.setItem('streak', streak + 1)
    } else {
      setStreak(0)
      setError(`The correct answer for ${katakana[letter].katakana} is ${katakana[letter].romanji}`)
      sessionStorage.setItem('streak', 0)
    }
    setInput('')
    setRandomKatakana()
  }

  const handleButtonClick = () => {
    isLight ? setIsLight(false) : setIsLight(true)
  }

  useEffect(() => {
    setRandomKatakana()
    setStreak(parseInt(sessionStorage.getItem('streak')) || 0)
    setMaxStreak(parseInt(sessionStorage.getItem('maxStreak')) || 0)
  }, [])

  return (
    <div className={`min h-screen ${isLight ? "bg-slate-200" : "bg-slate-800"} text-white text-center`}>
      <header className='p-6 mb-8'>
        <h1 className={`text-2xl font-bold uppercase ${isLight ? "text-slate-800" : "text-slate-200"} mb-4`}>Katakana Quiz</h1>
        <div className={`${isLight ? "text-slate-800" : "text-slate-200"}`}>
          <p>{streak}/{maxStreak}</p>
        </div>
      </header>

      <div className={`text-9xl font-bold mb-8 ${isLight ? "text-slate-800" : "text-slate-200"}`}>
        {katakana[letter].katakana}
      </div>

      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <Input 
          input={input} 
          handleChange={handleChange} 
          isLight={isLight}
          />
        </form>
      </div>
      {error && <p className='text-red-600 text-center'>{error}</p>}
      <Button 
      isLight={isLight} 
      handleButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
