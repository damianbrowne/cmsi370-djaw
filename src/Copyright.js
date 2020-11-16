import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Cr() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://cdn.cnn.com/cnnnext/dam/assets/160107100400-monkey-selfie-exlarge-169.jpg">
                DJAW
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}