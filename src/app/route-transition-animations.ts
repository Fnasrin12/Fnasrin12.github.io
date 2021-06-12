import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
	transition('one => two, one => three, one => four, one => five, two => three, two => four, two => five, three => four, three => five, four => five', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('five => four, five => three, five => two, five => one, four => three , four => two, four => one, three => two, three => one, two => one', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);
