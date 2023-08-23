import './certificate.css'
import numbers from './../../assets/img/numbers.png'
import logo from './../../assets/img/logo.png'
import { useState, useEffect } from 'react'

const Certificate = () => {
  const data = {
    certificateTitle: 'Early Career Achiever',
    certificationId: 2359874,
    fullName: 'Yashar Nasibov',
    summaryText: 'With a 68% Overall Talent Score and a peer percentile ranking of 74%, Yashar Nasibov has demonstrated a diverse range of aptitudes and skills, positioning him among his peers. This certificate honors his various accomplishments and underscores his commitment to growth and development. Especially, his great achievements present him as an excellent fit for positions demanding good programming skills, enabling them to excel in industries like computer sciences.',
  }

  const {certificateTitle, certificationId, fullName, summaryText} = data

  const [currentDate, setCurrentDate] = useState('')

  // This useEffect create a current date
  useEffect(() => {
    const today = new Date()
    setCurrentDate(formatDate(today))
  }, [])

  // This function used for get dd.mm.yyyy time format
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).split('/').join('.')
  }

  // This function used to get the date 10 months later
  const getFutureDate = () => {
    const future = new Date()
    future.setMonth(future.getMonth() + 10)
    
    return formatDate(future)
  }

  return (
    <div className='certificate'>
      <div className='certificate-inner'>
        <div className='certificate-header'>
          <h1>Talent Excellence Certificate</h1>
          <img src={numbers} alt='Numbers' />
        </div>
        <div className='certificate-body'>
          <div className='certificate-svg'>
            <svg xmlns='http://www.w3.org/2000/svg' width='223' height='27' viewBox='0 0 223 27' fill='none'>
              <path d='M0 0H223V27H29.994C25.2455 27 20.7424 24.8908 17.7025 21.243L0 0Z' fill='#003F4D'/>
              <text fill='white' x='50%' y='50%' alignmentBaseline='middle' textAnchor='middle'>{certificateTitle}</text>
            </svg>
          </div>
          <div>
            <h2 className='certificate-fullName'>{fullName}</h2>
            <p className='certificate-text'>This is to certify that {fullName} has been thoroughly evaluated by our comprehensive Talent Scoring System, which examines career accomplishments, educational background, specialized proficiencies, sports involvement, language skills, programming knowledge, and more. Based on a comprehensive analysis and assessment, {fullName} has exhibiteda range of talents and capabilities.</p>
            <h3 className='certificate-summary'>CERTIFICATE SUMMARY</h3>
            <p className='certificate-summary-text'>{summaryText}</p>
            <div className='certificate-signature'>
              <p>Signature:</p>
              <div>
                <p>Talent Score Testing Center</p>
                <svg xmlns='http://www.w3.org/2000/svg' width='112' height='2' viewBox='0 0 112 2' fill='none'>
                  <path d='M1 1H111' stroke='black' strokeOpacity='0.65' strokeWidth='0.7' strokeLinecap='round'/>
                </svg>
              </div>
              <img src={logo} alt='Talent Score Logo' /> 
            </div>
            <div className='certificate-footer'>
              <p>The validity of this certificate can be verified online at: www.talentscoring.az/verication</p>
              <div>
                <p>Issuance Date: <span>{currentDate}</span></p>
                <p>Validity Period: <span>{getFutureDate()}</span></p>
                <p>Certification ID: <span>{certificationId}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate
