import { Heading, Vstack, HStack, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '500px',
        aspectRatio: 4 / 3,
        borderRadius: '5px',
        boxShadow: '0px 10px 20px 0px #0f4022',
        display: 'grid',
        gridTemplateRows: '7.5fr 1fr 1.5fr 1fr',
        gridTemplateAreas: `
        'image'
        'title'
        'description'
        'see-more'
       `,
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          gridArea: 'image',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '5px 5px 0px 0px',
        }}
      >
        <Image src={imageSrc} />
      </div>
      <Heading
        as="h5"
        size="sm"
        style={{ gridArea: 'title', color: 'black', alignSelf: 'center', marginLeft: '15px' }}
      >
        {title}
      </Heading>
      <Text
        style={{
          gridArea: 'description',
          color: 'grey',
          marginLeft: '15px',
          alignSelf: 'start',
        }}
      >
        {description}
      </Text>
      <HStack
        style={{
          gridArea: 'see-more',
          padding: '0px 15px',
          alignSelf: 'start',
        }}
        spacing={2}
      >
        <Text as={'b'} fontSize="m" color={'black'}>
          See more
        </Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} />
      </HStack>
    </div>
  );
};

export default Card;
