import React from 'react';
import { connect } from 'react-redux';
import { MdClear, MdKeyboardArrowRight } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as ActionsLovedIt from '../../store/Modules/lovedIt/actions';

import {
    Container,
    TshirtsLovedIt,
    ListTshirtLovedIt,
    LovedItEmpty,
} from './styles';

function LovedIt({ lovedIt, dispatch, history }) {
    const handleTshirtDetails = (id) => {
        history.push(`/details/${id}`);
    };
    return (
        <>
            {lovedIt.length === 0 ? (
                <LovedItEmpty> Você ainda não tem favoritos :( </LovedItEmpty>
            ) : (
                <Container>
                    <TshirtsLovedIt>
                        <h2>Você também gostou:</h2>
                        <ListTshirtLovedIt>
                            {lovedIt.map((loved) => (
                                <li key={loved.id}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            dispatch(
                                                ActionsLovedIt.removeToLovedIt(
                                                    loved
                                                )
                                            )
                                        }
                                    >
                                        <MdClear size={25} color=" #E73C7E" />
                                    </button>
                                    <img src={loved.image} alt={loved.title} />
                                    <div>
                                        <strong>{loved.title}</strong>
                                        <span>{loved.description}</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleTshirtDetails(loved.id)
                                        }
                                    >
                                        <MdKeyboardArrowRight
                                            size={40}
                                            color=" #E73C7E"
                                        />
                                    </button>
                                </li>
                            ))}
                        </ListTshirtLovedIt>
                    </TshirtsLovedIt>
                </Container>
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    lovedIt: state.lovedIt,
});

export default connect(mapStateToProps)(LovedIt);

LovedIt.propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    lovedIt: PropTypes.arrayOf(Object).isRequired,
};
