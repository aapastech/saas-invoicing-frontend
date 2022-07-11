import * as systemconfig from 'constants/system';
import featureFlags from 'constants/featureFlags';

export function prepareFeatureFlags(isPaidMember, userDetails) {
    const isOperator = Boolean(userDetails.usertype === systemconfig.OPERATOR_USER);
    if (isPaidMember) {
        return {
            FEATURE_OVERLAY: true,
            FEATURE_PAYOUTS: !isOperator,
        };
    }
    return {
        ...featureFlags,
    };
}
