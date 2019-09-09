import React from 'react'
import styled from 'styled-components/macro'

/* eslint-disable jsx-a11y/anchor-has-content */

const AnchorElement = (props) => {
    if(!props.href) return <span {...props} />
    if (/^[./]/.test(props.href)) return <a {...props}/>
    return <a {...props} target='_blank' rel='noopener noreferrer' />
}

const Anchor = styled(AnchorElement)`
	display: block;
	cursor: pointer;
	text-decoration: none;
	color: currentColor;
	font-weight: 500;
	opacity: 0.66;
	display: block;
	text-decoration: none;
	font-size: 1.125rem;
	line-height: 2rem;
	text-transform: lowercase;
	padding: 0.75rem;
	position: relative;
	:hover,
	:focus {
		opacity: 1;
	}
`

export default Anchor
