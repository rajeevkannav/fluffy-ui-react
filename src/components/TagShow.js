import React from 'react';

const TagShow = (props) => {
    const {tagsName} = props
    return (
        tagsName.map((tagName, index) => {
            return (
                <div className="col-3" key={index}>
                    <span className="badge badge-success">
                        {tagName}
                    </span>
                </div>
            )
        })
    )
}

export default TagShow;