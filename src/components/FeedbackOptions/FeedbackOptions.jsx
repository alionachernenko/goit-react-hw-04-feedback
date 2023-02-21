import PropTypes from 'prop-types'

import { Options } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <Options>
            {options.map((option) => (
                <button key={option} type="button" id={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </Options>
        )
    }

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}