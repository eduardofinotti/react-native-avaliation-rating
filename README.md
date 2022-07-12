
# react-native-avaliation-rating

Component for react-native projects to evaluate NPS or select a grade (number) from a range.

## Result

![Logo](https://github.com/eduardofinotti/react-native-avaliation-rating/raw/master/example.png)

## Install

Install react-native-avaliation-rating whith npm

```bash
  npm install react-native-avaliation-rating
```


## Import

```bash
  import { AvaliationRating } from 'react-native-avaliation-rating'

```
    
    
## Usage

```javascript
import { AvaliationRating } from 'react-native-avaliation-rating'

const [note, setNote] = useState(1)
const recomendationLevel = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

export default function App() {
    return (
        <AvaliationRating 
            recomendationLevel={recomendationLevel}
            onPress={(number)=> setNote(number)} 
            numberSelected={note}
            colorNumberActive={'#4177F6'}
            colorNumberInative={'#C4C4C4'}
            colorBackgroundActive={'#EEF1F5'}
            colorBackgroundInative={'#fff'}
            colorBorderInactive={'#C4C4C4'}
            textLess={'Pouco'}
            textMore={'Muito'}
            styleFontLess={{color: '#FF3A44', opacity: 0.7}}
            styleFontMore={{color: '#2DA771', opacity: 0.7}}
            styleNumberText={FONTS.subtitle}
            numberContentStyle={{marginHorizontal: 2, borderRadius: 4}}
        />
    );
}
```


## Contribution

We'd love to have your helping hand on contributions to react-native-avaliation-rating by forking and sending a pull request!

Your contributions are heartily welcome, recognized and appreciated.

How to contribute:

* Open pull request with improvements
* Discuss ideas in issues
* Spread the word
* Reach out with any feedback


## Author

- [@eduardofinotti](https://github.com/eduardofinotti)

