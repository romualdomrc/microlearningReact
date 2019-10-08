import React from 'react'

import { connect } from 'react-redux';
import { listCourses } from '../actions';
import { Div } from "../styles/stylesR";


function Item(props) {
    return <li>{props.value}</li>;
 }


class CoursePage extends React.Component {
    componentDidMount() {
        this.props.listCourses();
    }

    render() {
        const { courses, navigation } = this.props;

        if (courses === null) {
            return (
                <Div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                </Div>
            )
        }

        return (
            <ul>
                {courses.map((item) => <Item key={item.id} value={item.title} />)}
            </ul>
        )
    }    
}

const mapStateToProps = state => {
    const { courses } = state;

    if (courses === null) {
        return { courses }
    }

    const keys = Object.keys(courses);
    const coursesWithKeys = keys.map(id => {
        return { ...courses[id], id}
    })
    console.log('mapStateToProps',coursesWithKeys);
    return { courses: coursesWithKeys };
}

export default connect(mapStateToProps, { listCourses })(CoursePage);
