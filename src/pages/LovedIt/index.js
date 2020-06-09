import React from 'react';
import { connect } from 'react-redux';
import { MdClear, MdKeyboardArrowRight } from 'react-icons/md';
import * as ActionsLovedIt from '../../store/Modules/lovedIt/actions';

import { Container, TshirtsLovedIt, ListTshirtLovedIt } from './styles';

function LovedIt({ lovedIt, dispatch, history }) {
    const handleTshirtDetails = (id) => {
        history.push(`/details/${id}`);
    };
    return (
        <Container>
            <TshirtsLovedIt>
                <h2>Você também gostou:</h2>
                <ListTshirtLovedIt>
                    {lovedIt.map((lovedIt) => (
                        <li key={lovedIt.id}>
                            <button
                                type="button"
                                onClick={() =>
                                    dispatch(
                                        ActionsLovedIt.removeToLovedIt(lovedIt)
                                    )
                                }
                            >
                                <MdClear size={25} color=" #E73C7E" />
                            </button>
                            <img src={lovedIt.image} alt={lovedIt.title} />
                            <div>
                                <strong>{lovedIt.title}</strong>
                                <span>{lovedIt.description}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleTshirtDetails(lovedIt.id)}
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
    );
}

const mapStateToProps = (state) => ({
    lovedIt: state.lovedIt,
});

export default connect(mapStateToProps)(LovedIt);
