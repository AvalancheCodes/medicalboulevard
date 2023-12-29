import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SanityContext from "../../state/SanityProvider/SanityContext";


interface IProps {
    className?: string;
    microBlogId?: string;
}
function extractBodyText(bodyArray) {
    return bodyArray
        .map(block =>
            block.children.map(span => span.text).join('')
        )
        .join('\n\n');
}


const MicroBlog = ({className, microBlogId}:IProps) => {
    const client = useContext(SanityContext);
    const [microBlogData, setMicroBlogData] = useState(null);

    useEffect(() => {
        const query = `*[_type == "microBlog" && _id == "${microBlogId}"][0]`; // This query fetches the first document of type "hero"
        client.fetch(query)
            .then((data) => {
                setMicroBlogData(data);
            })
            .catch((error) => {
                console.error("Sanity fetch error:", error);
            });
    }, [client]); // Add client to the dependency array

    return (
        <Container as='section' className='my-5 py-4'>
            <Row className='g-3 g-xl-4'>
                <Col className="m-0 mx-4 text-center">
                    <h2 className='h1 mb-4'>{microBlogData.title}</h2>
                    <p className="fs-5 fw-normal">
                        {extractBodyText(microBlogData.body)}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default MicroBlog;