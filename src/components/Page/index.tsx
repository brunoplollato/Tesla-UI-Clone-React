import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent/index';
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles';


const Sections = [
  { "name": "Model S",
    "description": "Order Online for Touchless Delivery",
    "buttons": {
      "left": "Custom Order",
      "right": "Existing Inventory"
    }
  },
  { "name": "Model Y",
    "description": "Order Online for Touchless Delivery",
    "buttons": {
      "left": "Custom Order",
      "right": "Existing Inventory"
    }
  },
  { "name": "Model 3",
    "description": "Order Online for Touchless Delivery",
    "buttons": {
      "left": "Custom Order",
      "right": "Existing Inventory"
    }
  },
  { "name": "Model X",
    "description": "Order Online for Touchless Delivery",
    "buttons": {
      "left": "Custom Order",
      "right": "Existing Inventory"
    }
  },
  { "name": "Lowest Cost Solar Panels in America",
    "description": "Money-back guarantee",
    "buttons": {
      "left": "Order Now",
      "right": "Learn More"
    }
  },
  { "name": "Solar for New Roofs",
    "description": "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
    "buttons": {
      "left": "Order Now",
      "right": "Learn More"
    }
  },
  { "name": "Accessories",
    "description": "",
    "buttons": {
      "left": "Shop Now",
      "right": ""
    }
  }
]

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {Sections.map(model => (
            <ModelSection
              key={model.name}
              className="colored"
              modelName={model.name}
              overlayNode={
                <DefaultOverlayContent
                  label={model.name}
                  description={model.description}
                  leftButton={model.buttons.left}
                  rightButton={model.buttons.right}
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page