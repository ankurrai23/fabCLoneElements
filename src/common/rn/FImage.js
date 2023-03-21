import React, {useState} from 'react';
import {Image} from 'react-native';

function FImage(props) {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {hasError ? (
        <Image {...props} source={props.defaultSource} />
      ) : (
        <Image
          {...props}
          onLoad={() => setHasError(false)}
          onError={() => {
            console.log('Error loading image');
            setHasError(true);
          }}
        />
      )}
    </>
  );
}

FImage.propTypes = {};

FImage.defaultProps = {};

export default FImage;
