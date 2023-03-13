import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { object, string, email, mixed, required } from 'yup';
import FullScreenSection from './FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    onOpen(response?.type, response?.message);
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: values => {
      submit('', values);
    },
    validationSchema: object({
      firstName: string().required(),
      email: string().email().required(),
      type: mixed().oneOf(['hireMe', 'openSource', 'other']),
      comment: string().min(10).max(250).required(),
    }),
  });

  return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" py={16} spacing={8}>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form
            onSubmit={e => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" name="firstName" />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" name="email" type="email" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.type && formik.touched.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" onBlur={formik.handleBlur}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.comment && formik.touched.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea id="comment" name="comment" height={250} />
                <FormErrorMessage>
                  {formik.errors.comment && formik.touched.comment}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                disabled={!(formik.isValid && formik.dirty)}
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
