import React, {Component} from 'react'
import {Text, Link} from 'Components/Text'
import SectionWrap from 'Components/SectionWrap'
import {Box} from 'Components/Box'

const text = (
	<>
		<Text set="xxl" as="h1">
			An quod ita callida est, ut optime possit architectari voluptates?
		</Text>

		<Text set="lGreyBold" as="h2">
			Quod eo liquidius faciet, si perspexerit rerum inter eas verborumne sit
			controversia?
		</Text>

		<Text set="mGrey" as="p">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habes, inquam,
			Cato, formam eorum, de quibus loquor, philosophorum. Nam, ut saepe iam
			dixi, in infirma aetate inbecillaque mente vis naturae quasi per caliginem
			cernitur; Duo Reges: constructio interrete. Nullus est igitur cuiusquam
			dies natalis. Sed plane dicit quod intellegit. Itaque eos id agere, ut a
			se dolores, morbos, debilitates repellant. Tubulo putas dicere? Philosophi
			autem in suis lectulis plerumque moriuntur. Quid, si etiam iucunda memoria
			est praeteritorum malorum?
		</Text>

		<Text set="mGrey" as="p">
			<Link href="http://loripsum.net/" target="_blank">
				Tu quidem reddes;
			</Link>{' '}
			Hoc dictum in una re latissime patet, ut in omnibus factis re, non teste
			moveamur.{' '}
			<Link href="http://loripsum.net/" target="_blank">
				Aufert enim sensus actionemque tollit omnem.
			</Link>{' '}
			Est autem officium, quod ita factum est, ut eius facti probabilis ratio
			reddi possit. Nam et complectitur verbis, quod vult, et dicit plane, quod
			intellegam;{' '}
			<Text set="mGreyBold">Summum a vobis bonum voluptas dicitur.</Text>{' '}
			Quamvis enim depravatae non sint, pravae tamen esse possunt.{' '}
		</Text>

		<Text set="lGreyBold" as="h2">
			Quod eo liquidius faciet, si perspexerit rerum inter eas verborumne sit
			controversia?
		</Text>

		<Text set="mGrey" as="p">
			Sed ille, ut dixi, vitiose. Potius inflammat, ut coercendi magis quam
			dedocendi esse videantur. Ego vero volo in virtute vim esse quam maximam;
			Nam illud vehementer repugnat, eundem beatum esse et multis malis
			oppressum. Quod eo liquidius faciet, si perspexerit rerum inter eas
			verborumne sit controversia.{' '}
			<Text set="mGreyItalic">Graece donan, Latine voluptatem vocant.</Text>{' '}
			<Text set="mGreyBold">Illa tamen simplicia, vestra versuta.</Text> Idemque
			diviserunt naturam hominis in animum et corpus. Utrum igitur tibi litteram
			videor an totas paginas commovere?{' '}
			<Text set="mGreyBold">Nihil enim hoc differt.</Text>{' '}
		</Text>

		<Text set="mGreyItalic">
			Qui mos cum a posterioribus non esset retentus, Arcesilas eum revocavit
			instituitque ut ii, qui se audire vellent, non de se quaererent, sed ipsi
			dicerent, quid sentirent; Sed tamen intellego quid velit.
		</Text>

		<Text set="sGreyUl" as="ul">
			<Text set="mGrey" as="li">
				Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille
				dicat.
			</Text>
			<Text set="mGrey" as="li">
				Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate
				sapientis.
			</Text>
			<Text set="mGrey" as="li">
				Ex quo, id quod omnes expetunt, beate vivendi ratio inveniri et
				comparari potest.
			</Text>
			<Text set="mGrey" as="li">
				Respondebo me non quaerere, inquam, hoc tempore quid virtus efficere
				possit.
			</Text>
		</Text>

		<Text set="mGrey" as="p">
			<Link href="http://loripsum.net/" target="_blank">
				Compensabatur, inquit, cum summis doloribus laetitia.
			</Link>{' '}
			Quid enim possumus hoc agere divinius? Idemque diviserunt naturam hominis
			in animum et corpus. Vitae autem degendae ratio maxime quidem illis
			placuit quieta. Summum ením bonum exposuit vacuitatem doloris; Nonne
			igitur tibi videntur, inquit, mala?{' '}
		</Text>

		<Text set="sGreyOl" as="ol">
			<Text set="mGrey" as="li">
				Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et
				fortius, quam a Stasea dicebantur.
			</Text>
			<Text set="mGrey" as="li">
				Ait enim se, si uratur, Quam hoc suave! dicturum.
			</Text>
			<Text set="mGrey" as="li">
				Iam in altera philosophiae parte.
			</Text>
		</Text>
	</>
)

class About extends Component {
	render() {
		return (
			<SectionWrap gap left>
				<Box column left gap>
					{text}
				</Box>
			</SectionWrap>
		)
	}
}

export default About
