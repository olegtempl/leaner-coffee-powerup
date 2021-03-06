import VotingCardBadge from './VotingCardBadge';

class VotingCardDetailBadge extends VotingCardBadge {
  showVoters = async (t) => {
    const items = await this.getVoters(t);

    if (!items.length) { return; }

    t.popup({
      title: 'Voters',
      items
    });
  };

  render = async (t) => {
    const commonData = await super.render(t);

    if (commonData) {
      commonData.title = 'Voters';
      delete commonData.icon;
      commonData.callback = this.showVoters;
    }

    return commonData;
  };
}

export default VotingCardDetailBadge;
