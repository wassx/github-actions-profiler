import { Flex, Heading, Surface, Text, Paragraph } from '@dynatrace/strato-components-preview';
import React, { ReactNode } from 'react';

type CardProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  content: ReactNode;
  action: ReactNode;
};

export const Card = (props: CardProps) => {
  const { title, subtitle, content, action } = props;

  return (
    <Surface as={Flex} flexDirection='column' gap={16}>
      <Flex gap={6} flexDirection='column' alignItems='left'>
        <Heading as='h2' level={4}>
          {title}
        </Heading>
        {subtitle ? <Text textStyle='base-emphasized'>{subtitle}</Text> : null}
      </Flex>
      <Paragraph>{content}</Paragraph>
      {action}
    </Surface>
  );
};
